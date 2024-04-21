import { NavLink } from 'react-router-dom'
import dhcp from '../assets/dhcp.png'
import ftp from '../assets/ftp.png'
import ethernet from '../assets/ethernet.png'
import ip from '../assets/ip.png'
import tcp from '../assets/tcp.png'
import telnet from '../assets/telnet.png'
import firewall from '../assets/firewall.png'
import wan from '../assets/wan.png'
import lan from '../assets/lan.png'
import ipsec from '../assets/ipsec.png'
import nat from '../assets/nat.png'
import osi from '../assets/osi.png'
import cn from '../assets/cn.png'
import ns from '../assets/ns.png'
import wn from '../assets/wn.png'
import ssh from '../assets/ssh.png'
import vpn from '../assets/vpn.png'
import switches from '../assets/switches.png'
import udp from '../assets/udp.png'
import virtualization from '../assets/virtualization.png'
import troubleshooting from '../assets/troubleshooting.png'
import topologies from '../assets/topologies.png'
import router from '../assets/router.png'

const Topics = () => {
  return (
    <div className='all_topics'>
      <NavLink to="/quiz/DHCP"><img src={ dhcp } alt='dhcp'/></NavLink>
      <NavLink to="/quiz/FTP"><img src={ ftp } alt='ftp'/></NavLink>
      <NavLink to="/quiz/Ethernet"><img src={ ethernet } alt='ethernet'/></NavLink>
      <NavLink to="/quiz/Telnet"><img src={ telnet } alt='telnet'/></NavLink>
      <NavLink to="/quiz/Routers"><img src={ router } alt='dhcp'/></NavLink>
      <NavLink to="/quiz/UDP"><img src={ udp } alt='udp'/></NavLink>
      <NavLink to="/quiz/Switches"><img src={ switches } alt='switches'/></NavLink>
      <NavLink to="/quiz/VPN"><img src={ vpn } alt='vpn'/></NavLink>
      <NavLink to="/quiz/Network_Security"><img src={ ns } alt='ns'/></NavLink>
      <NavLink to="/quiz/OSI_Model"><img src={ osi } alt='osi'/></NavLink>
      <NavLink to="/quiz/NAT"><img src={ nat } alt='nat'/></NavLink>
      <NavLink to="/quiz/IPsec"><img src={ ipsec } alt='ipsec'/></NavLink>
      <NavLink to="/quiz/Firewalls"><img src={ firewall } alt='firewall'/></NavLink>
      <NavLink to="/quiz/TCP_IP"><img src={ tcp } alt='tcp'/></NavLink>
      <NavLink to="/quiz/InternetProtocol"><img src={ ip } alt='ip'/></NavLink>
      <NavLink to="/quiz/Network_Topologies"><img src={ topologies } alt='topologies'/></NavLink>
      <NavLink to="/quiz/lan"><img src={ lan } alt='lan'/></NavLink>
      <NavLink to="/quiz/wan"><img src={ wan } alt='wan'/></NavLink>
      <NavLink to="/quiz/cn"><img src={ cn } alt='cn'/></NavLink>
      <NavLink to="/quiz/ssh"><img src={ ssh } alt='ssh'/></NavLink>
      <NavLink to="/quiz/wn"><img src={ wn } alt='wn'/></NavLink>
      <NavLink to="/quiz/troubleshooting"><img src={ troubleshooting } alt='troubleshooting'/></NavLink>
      <NavLink to="/quiz/virtualization"><img src={ virtualization } alt='virtualization'/></NavLink>
    </div>
  )
}

export default Topics