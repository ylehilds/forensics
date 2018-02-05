import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PacketAnalysis from '@/components/PacketAnalysis'
import WindowsForensics from '@/components/WindowsForensics'
import LinuxForensics from '@/components/LinuxForensics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello World',
      component: HelloWorld
    },
    {
      path: '/packetAnalysis',
      name: 'Packet Analysis',
      component: PacketAnalysis
    },
    {
      path: '/windowsForensics',
      name: 'Windows Forensics',
      component: WindowsForensics
    },
    {
      path: '/linuxForensics',
      name: 'Linux Forensics',
      component: LinuxForensics
    }
  ]
})
