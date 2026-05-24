import React, { useState } from "react";
import "./ReportsLayout.css";

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
    const content = `
Report Details
--------------
Doctor: ${report.doctorName}
Speciality: ${report.speciality}
Generated: ${new Date().toLocaleString()}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.doctorName}_report.txt`;
    link.click();

    URL.revokeObjectURL(url);
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