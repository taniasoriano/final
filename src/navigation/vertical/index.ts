// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'


const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: 'mdi:home-outline',
      path: '/pages/home'
    },
    
    {
      sectionTitle: 'Gestiones'
    },
    {
      title: 'Nóminas',
      icon: "material-symbols:paid-outline-rounded",
      path: '/apps/invoice/nominas' 
    },
    
    {
      title: 'Formulario de Nómina',
      path: '/forms/form-wizard',
      icon: 'mdi:transit-connection-horizontal'
    },
    {
      title: 'Gestión Seg. Social',
      icon: "prime:align-justify",
      path: '/apps/invoice/solicitudes' 
    },
  
    {
      sectionTitle: 'Servicios'
    },
    

    {
      title: 'Facturas',
      icon: "ri:bill-line",
      path: '/apps/invoice/facturas' 
    },
    
    {
      title: 'Metodos de Pago',
      icon: 'mdi:credit-card-outline',
      path: '/pages/account-settings/billing'
    },
    {
      title: 'Servicios Contratados',
      icon: 'iconoir:send-euros',
      path: '/pages/pricing'
    },
    {
      sectionTitle: 'FAQ'
    },
    
    {
      title: 'Preguntas Frecuentes',
      icon: 'material-symbols:question-exchange',
      path: '/pages/faq'
    },
    {
      sectionTitle: 'Usuario'
    },
    
    {
      openInNewTab: true,
      title: 'Cambiar contraseña',
      icon: 'carbon:password',
      path: '/pages/auth/reset-password-v1'
    },
    
    
       
  ]
}

export default navigation
