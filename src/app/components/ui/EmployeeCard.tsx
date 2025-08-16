import {
  User,
  Mail,
  Calendar,
  Clock,
  AlertTriangle,
  Loader2,
} from "lucide-react";

interface EmployeeDataResult {
  id: string;
  name: string;
  email: string;
  startDate: string;
  status: string;
  jobRole: string;
  ptoUsed: number;
}

const EmployeeCard = ({
  query,
  result,
  status,
}: {
  query?: string;
  result: EmployeeDataResult;
  status: "inProgress" | "executing" | "complete";
}) => {
  const employeeData = {
    id: "EMP044",
    name: "Nicholas Ray",
    email: "hwatkins@gmail.com",
    startDate: "2024-03-02T00:00:00.000Z",
    status: "terminated",
    jobRole: "QA Engineer",
    ptoUsed: 14.8,
  };

  const getThemeColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "linear-gradient(135deg, #10b981, #059669)";
      case "terminated":
        return "linear-gradient(135deg, #ef4444, #dc2626)";
      case "on-leave":
        return "linear-gradient(135deg, #f59e0b, #d97706)";
      default:
        return "linear-gradient(135deg, #6b7280, #4b5563)";
    }
  };

  if (status !== "complete") {
    return (
      <div
        className="rounded-2xl shadow-xl mt-6 mb-4 max-w-md w-full mx-auto overflow-hidden"
        style={{ background: getThemeColor(employeeData.status) }}
      >
        <div className="bg-white/20 p-8 w-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/30 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="h-6 bg-white/30 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-white/20 rounded animate-pulse w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 text-white">
            <Loader2 className="w-5 h-5 animate-spin" />
            <p className="animate-pulse font-medium">
              Loading employee data for {query}...
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-12 bg-white/10 rounded-lg animate-pulse"></div>
            <div className="h-12 bg-white/10 rounded-lg animate-pulse"></div>
            <div className="h-12 bg-white/10 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "terminated":
        return "bg-red-100 text-red-800 border-red-200";
      case "on-leave":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const generateAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-cyan-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white opacity-10 rounded-full"></div>

        <div className="relative z-10 flex items-center space-x-4">
          {/* Avatar */}
          <div
            className={`w-16 h-16 ${generateAvatarColor(
              result.name
            )} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
          >
            {getInitials(result.name)}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">
              {result.name}
            </h2>
            <p className="text-gray-300 text-sm font-medium">
              {result.jobRole}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-400 bg-black bg-opacity-20 px-2 py-1 rounded-full">
                {result.id}
              </span>
              <span
                className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                  result.status
                )}`}
              >
                {result.status === "terminated" && (
                  <AlertTriangle className="w-3 h-3 inline mr-1" />
                )}
                {result.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6 space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">Email</p>
            <p className="text-sm text-gray-600 truncate">
              {employeeData.email}
            </p>
          </div>
        </div>

        {/* Start Date */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Start Date</p>
            <p className="text-sm text-gray-600">
              {formatDate(employeeData.startDate)}
            </p>
          </div>
        </div>

        {/* PTO Used */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">PTO Used</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-600">
                {employeeData.ptoUsed} days
              </p>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      (employeeData.ptoUsed / 30) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <User className="w-4 h-4" />
            <span>Employee Profile</span>
          </div>
          <button className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
