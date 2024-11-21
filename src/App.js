import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    course: 'B. tech' // default value
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString(); // Getting the current date
    const Name=  `Name: ${formData.name}`;
    const courseDetails=`Course:  ${formData.course}`;
    const dateofOffer=`Date of Offer(current date): ${date}`;

    // Add a header
    doc.setFontSize(12);
    
    doc.text(Name, 10, 20);
    doc.text(courseDetails, 10, 30);
    doc.text(dateofOffer, 10, 40);
    doc.text("Fee structure:", 10, 50);

    const headerStyles = {
      fillColor:[255,255,255],
      textColor: [0],
      fontFamily: 'Newsreader',
      fontStyle: 'bold',
  };

    // Add subheader based on course selection
    if (formData.course === 'B. tech') {
      doc.text("Ref- A101", 10, 10);
        autoTable(doc, {
       
        startY: 55,
        head: [['Year', 'One time fee','Tuition fee']],
        body: [
          ['1', '500', '160'],
          ['2', '-', '160']
        ],
        theme: 'grid',
        headStyles: {
          lineWidth: 0.2,
          lineColor: [128, 128, 128],
          fillColor: headerStyles.fillColor,
          textColor: headerStyles.textColor,
          fontStyle: headerStyles.fontStyle,
          fontSize: 10, // Adjust the font size as needed
          font: 'Newsreader', // Set the font family
          halign: 'left',
          border: 30,
      },
       
      columnStyles: {
          0: { cellWidth: 40 }, // Adjust column widths as needed
          1: { cellWidth: 40 },
          2: { cellWidth: 40 },
         
      },
      alternateRowStyles: { fillColor: [255, 255, 255] },
      bodyStyles: {
          fontSize: 10, // Adjust the font size for the body
          font: 'Newsreader', // Set the font family for the body
          cellPadding: { top: 1, right: 5, bottom: 1, left: 2 }, // Adjust cell padding
          textColor: [0, 0, 0], // Set text color for the body
          rowPageBreak: 'break', // Avoid row page breaks
      },
      margin: { top: 10, left: 13 },


    });
    } else {
      doc.text("Ref- B101", 10, 10);
      autoTable(doc, {
        startY: 55,
        head: [['Year', 'One time fee','Tuition fee']],
        body: [
          ['1', '600', '260'],
          ['2', '-', '260']
        ],

        theme:'grid',
        headStyles: {
          lineWidth: 0.1,
          lineColor: [128, 128, 128],
          fillColor: headerStyles.fillColor,
          textColor: headerStyles.textColor,
          fontStyle: headerStyles.fontStyle,
          fontSize: 10, // Adjust the font size as needed
          font: 'Newsreader', // Set the font family
          halign: 'left',
          border: 30,
      },
       
      columnStyles: {
          0: { cellWidth: 40 }, // Adjust column widths as needed
          1: { cellWidth: 40 },
          2: { cellWidth: 40 },
         
      },
      alternateRowStyles: { fillColor: [255, 255, 255] },
      bodyStyles: {
          fontSize: 10, // Adjust the font size for the body
          font: 'Newsreader', // Set the font family for the body
          cellPadding: { top: 1, right: 5, bottom: 1, left: 2 }, // Adjust cell padding
          textColor: [0, 0, 0], // Set text color for the body
          rowPageBreak: 'break', // Avoid row page breaks
      },
      margin: { top: 10, left: 13 },


    });
    }

    // Save the PDF
    doc.save(`${formData.name}-${formData.course}.pdf`);
  };

  return (
    <div className="App">
      <form  className='form' onSubmit={(e) => e.preventDefault()}>
        <div className='Name'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='Name'>
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="B. tech">B. Tech</option>
            <option value="M. tech">M. Tech</option>
          </select>
        </div>
        <button className='Btn1' type='submit' >submit</button>
        <button className='Btn2' type="button" onClick={generatePDF}>Generate PDF</button>
      </form>
    </div>
  );
}

export default App;
