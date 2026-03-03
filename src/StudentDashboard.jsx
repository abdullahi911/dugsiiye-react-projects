const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white shadow-sm px-16 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome back, Student
          </h1>
          <p className="text-sm text-gray-500">
            Here is what’s happening with your courses
          </p>
        </div>

        <div className="relative text-2xl cursor-pointer">
          🔔
          <span className="absolute -top-2 -right-2 bg-fuchsia-600 text-white text-[10px] px-2 py-0.5 rounded-full">
            3
          </span>
        </div>
      </div>

      <div className="p-10 grid grid-cols-4 gap-6">
        
        <div className="bg-yellow-50 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">📊</span>
            <p className="text-sm">Average Grade</p>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">88%</p>
        </div>

        <div className="bg-green-50 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">📚</span>
            <p className="text-sm">Courses Completed</p>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">5</p>
        </div>

        <div className="bg-purple-50 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">🕰️</span>
            <p className="text-sm">Study Hours</p>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">45</p>
        </div>

        <div className="bg-blue-50 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">✍️</span>
            <p className="text-sm">Assignments Due</p>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">12</p>
        </div>

      </div>
<div className="grid grid-cols-3 gap-6 p-8">

  {/* Main Courses Progress */}
  <div className="col-span-2 bg-white rounded-xl shadow-sm p-6">
    <h1 className="text-lg font-semibold text-gray-800 mb-6">
      Courses Progress
    </h1>

    <div className="space-y-6">

      <div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>React Fundamentals</p>
          <span>75%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>JavaScript Advanced</p>
          <span>60%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>UX Design</p>
          <span>40%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: "40%" }}></div>
        </div>
      </div>

    </div>
  </div>

  {/* Right Side */}
  <div className="space-y-6">

    {/* Upcoming Assignments */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h1 className="text-lg font-semibold text-gray-800 mb-6">
        Upcoming Assignments
      </h1>

      <div className="space-y-4">

        <div className="flex justify-between items-start border-b pb-3">
          <div>
            <h2 className="text-sm font-medium text-gray-800">
              Build Todo App
            </h2>
            <p className="text-xs text-gray-500">React Fundamentals</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
            Pending
          </span>
        </div>

        <div className="flex justify-between items-start border-b pb-3">
          <div>
            <h2 className="text-sm font-medium text-gray-800">
              API Integration
            </h2>
            <p className="text-xs text-gray-500">JavaScript Advanced</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
            Completed
          </span>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-sm font-medium text-gray-800">
              Design System
            </h2>
            <p className="text-xs text-gray-500">UX Design</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
            In Progress
          </span>
        </div>

      </div>
    </div>

    {/* Announcement Below Upcoming */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h1 className="text-lg font-semibold text-gray-800 mb-6">
        Announcements
      </h1>

      <div className="space-y-6">

        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-sm font-medium text-gray-800">
          new courses available
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Check out the new typescript and node.js courses added this month.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-sm font-medium text-gray-800">
        maintainance notice
          </h2>
          <p className="text-xs text-gray-500 mt-1">
        platform updates shedualed for tonight 5 hours ago
          </p>
        </div>

      </div>
    </div>

  </div>

</div>

    </div>
  );
};

export default Dashboard;