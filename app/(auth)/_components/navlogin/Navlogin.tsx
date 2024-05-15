'use client'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react'
import AdminLoginform from '../loginforms/AdminLoginform'
import StudentLoginform from '../loginforms/StudentLoginform'
import TeacherLoginform from '../loginforms/TeacherLoginform'
export const NavLogin = () => {
  const routes = [
    {
      name: 'Admin Login',
      component: <AdminLoginform />,
    },
    {
      name: 'Student Login',
      component: <StudentLoginform />,
    },
    {
      name: 'Teacher Login',
      component: <TeacherLoginform />,
    }
  ]
  return (
    <>
      <TabGroup>
        <TabList>
          {routes.map((route, index) => (
            <Tab key={index} className={'mb-2 outline-none'}>
              {({ hover, selected }) => (
                <h3
                  className={`${selected ? 'border-b-2' : ''} text-lg font-medium p-2 text-slate-600 border-black ${selected || hover ? 'text-slate-900 font-medium' : ''} `}
                >
                  {route.name}
                </h3>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {routes.map((route, index) => (
            <TabPanel key={index}>
              {route.component}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup >
    </>
  )
}