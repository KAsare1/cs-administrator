import React from 'react';
import axios from 'axios';

const DownloadButton: React.FC = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get('https://placement-server.onrender.com/placement/export-data/', {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'choices_data.csv');
            document.body.appendChild(link);
            link.click();
            link.remove(); // Clean up the link element
        } catch (error) {
            console.error('Error exporting data:', error);
        }
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
        >
            Download Choices Data
        </button>
    );
};

export default DownloadButton;
