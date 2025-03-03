import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/login.vue'
import Registro from '@/components/registro.vue'
import curso from '@/components/curso.vue'
import inicio from '@/components/inicio.vue'
import fin from '@/components/fin.vue'
import recoveryPassword from '@/components/recoveryPassword.vue'
import chancePassword from '@/components/chancePassword.vue'
import dashboard from '@/components/dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Registro',
        component: Registro
    },
    {
        path: '/cursos',
        name: 'cursos',
        component: curso
    },
    {
        path: '/inicio',
        name: 'inicio',
        component: inicio
    },
    {
        path: '/fin',
        name: 'fin',
        component: fin
    },
    {
        path: '/recuperar',
        name: 'Recuperar',
        component: recoveryPassword
    },
    {
      path: '/actualizar',
      name: 'Actualizar',
      component: chancePassword
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard
    },

]


const router = createRouter({ history: createWebHistory(), routes })

export default router
