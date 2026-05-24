import React, { useState } from "react";
import "./ReportsLayout.css";
import jsPDF from "jspdf";

const ReportsLayout = () => {
  const [reports] = useState([
    {
      id: 1,
      doctorName: "Dr. John",
      speciality: "Cardiologist",
    },
    {
      id: 2,
      doctorName: "Dr. Smith",
      speciality: "Dermatologist",
    },
  ]);

  const handleViewReport = (report) => {
    alert(
      `Viewing Report\nDoctor: ${report.doctorName}\nSpeciality: ${report.speciality}`
    );
  };

const handleDownloadReport = (report) => {
  const doc = new jsPDF();

  doc.setFont("helvetica");
  doc.setFontSize(16);

  doc.text("Report Details", 20, 20);

  doc.setFontSize(12);
  doc.text(`Doctor: ${report.doctorName}`, 20, 40);
  doc.text(`Speciality: ${report.speciality}`, 20, 50);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 60);

  doc.save(`${report.doctorName}_report.pdf`);
};

  return (
    <div className="reports-container">

      <h2 className="reports-title">Your Reports</h2>

      <table className="reports-table">

        <thead>
          <tr>
            <th>Serial No</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report, index) => (
            <tr key={report.id}>

              <td>{index + 1}</td>
              <td>{report.doctorName}</td>
              <td>{report.speciality}</td>

              {/* VIEW REPORT */}
              <td>
                <button
                  className="view-btn"
                  onClick={() => handleViewReport(report)}
                >
                  View Report
                </button>
              </td>

              {/* DOWNLOAD REPORT */}
              <td>
                <button
                  className="download-btn"
                  onClick={() => handleDownloadReport(report)}
                >
                  Download Report
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default ReportsLayout;