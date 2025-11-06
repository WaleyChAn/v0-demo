import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">医疗系统测试项目</span>
            <span className="block text-indigo-600">Medical System Test Project</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            基于 Next.js 和 v0.dev 构建的现代化医疗管理系统
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">认证模块</h3>
                <p className="mt-2 text-sm text-gray-500">
                  用户登录和权限管理
                </p>
                <div className="mt-4">
                  <Link 
                    href="/auth/login"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    进入登录页
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">数据录入</h3>
                <p className="mt-2 text-sm text-gray-500">
                  患者信息和医疗数据录入
                </p>
                <div className="mt-4 space-y-2">
                  <Link 
                    href="/data-entry"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 block"
                  >
                    数据录入首页
                  </Link>
                  <Link 
                    href="/data-entry/form"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 block"
                  >
                    患者建档表单
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">患者管理</h3>
                <p className="mt-2 text-sm text-gray-500">
                  患者档案和信息查询
                </p>
                <div className="mt-4 space-y-2">
                  <Link 
                    href="/patient/all"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 block"
                  >
                    所有患者列表
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">系统管理</h3>
                <p className="mt-2 text-sm text-gray-500">
                  系统配置和管理功能
                </p>
                <div className="mt-4 space-y-2">
                  <Link 
                    href="/system/users"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 block"
                  >
                    用户管理
                  </Link>
                  <Link 
                    href="/system/roles"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 block"
                  >
                    角色管理
                  </Link>
                  <Link 
                    href="/system/dict"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 block"
                  >
                    数据字典
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}