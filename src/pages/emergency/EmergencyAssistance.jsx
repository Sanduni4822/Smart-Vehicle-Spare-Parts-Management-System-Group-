import { Button } from "@/components/ui/button"; // shadcn/ui button
import { PhoneCall, FileText, FileSearch } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const policeStations = [
  { name: "Colombo Central", number: "0112322201" },
  { name: "Kandy Police", number: "0812222088" },
  { name: "Galle Police", number: "0912222266" },
  { name: "Negombo Police", number: "0312233143" },
  // Add more if needed
];

export default function EmergencyAssistance() {
  const navigate = useNavigate();
  const [showPoliceList, setShowPoliceList] = useState(false);

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
    setShowPoliceList(false);
  };

  const handleAmbulanceClick = () => {
    const confirmRedirect = window.confirm(
      "You are about to leave this site to visit the Suwasariya official website. Continue?"
    );
    if (confirmRedirect) {
      window.open("https://www.1990.lk/contact-us/", "_blank");
    }
  };

  const handleFireRescueClick = () => {
    const confirmRedirect = window.confirm(
      "You are about to leave this site to visit the Colombo Fire Services official website. Continue?"
    );
    if (confirmRedirect) {
      window.open("https://www.colombo.mc.gov.lk/fire-services.php", "_blank");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-2xl shadow-lg bg-white mt-8">
      <h2 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-2">
        <PhoneCall className="text-red-600" /> Emergency Assistance
      </h2>

      <p className="text-gray-600 mb-6">
        Need immediate help? Quickly reach out to critical services or report an incident.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Button
          className="bg-red-500 hover:bg-red-600 text-white w-full"
          onClick={() => setShowPoliceList(true)}
        >
          🚓 Call Police
        </Button>

        <Button
          className="bg-green-500 hover:bg-green-600 text-white w-full"
          onClick={handleAmbulanceClick}
        >
          🚑 Call Ambulance
        </Button>

        <Button
          className="bg-yellow-500 hover:bg-yellow-600 text-white w-full"
          onClick={handleFireRescueClick}
        >
          🔥 Call Fire & Rescue
        </Button>
      </div>

      {showPoliceList && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Select a Police Station</h3>
          <ul className="space-y-2">
            {policeStations.map((station) => (
              <li key={station.number}>
                <Button
                  className="w-full bg-red-300 hover:bg-red-600 text-white"
                  onClick={() => handleCall(station.number)}
                >
                  {station.name} - {station.number}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white flex-1"
          onClick={() => navigate("/add_report")}
        >
          <FileText className="mr-2" /> Report New Incident
        </Button>

        <Button
          className="bg-gray-700 hover:bg-gray-800 text-white flex-1"
          onClick={() => navigate("/past_reports")}
        >
          <FileSearch className="mr-2" /> View Past Reports
        </Button>
      </div>
    </div>
  );
}
