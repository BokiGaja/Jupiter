import Main from './components/Main.vue';

// Lazy Loading
const Dogs = resolve => {
    require.ensure(['./components/Dogs.vue'], () => {
        resolve(require('./components/Dogs.vue'))
    })
};
const Members = resolve => {
    require.ensure(['./components/Members.vue'], () => {
        resolve(require('./components/Members.vue'))
    })
};
const Contact = resolve => {
    require.ensure(['./components/Contact.vue'], () => {
        resolve(require('./components/Contact.vue'))
    })
};
const Adopt = resolve => {
    require.ensure(['./components/Adopt.vue'], () => {
        resolve(require('./components/Adopt.vue'))
    })
};
const Lost = resolve => {
    require.ensure(['./components/Lost.vue'], () => {
        resolve(require('./components/Lost.vue'))
    })
};
const Found = resolve => {
    require.ensure(['./components/Found.vue'], () => {
        resolve(require('./components/Found.vue'))
    })
};
const SignUp = resolve => {
    require.ensure(['./components/SignUp.vue'], () => {
        resolve(require('./components/SignUp.vue'))
    })
};


export const routes = [
    { path: '', component: Main},
    { path: '/dogs', component: Dogs, children: [
            { path: '', component: Adopt, name: 'adopt'},
            { path: 'lost', component: Lost, name: 'lost'},
            { path: 'found', component: Found, name: 'found'}
        ] },
    { path: '/members', component: Members, name: 'members' },
    { path: '/contacts', component: Contact, name: 'contacts', children: [
            { path: 'signup', component: SignUp, name: 'signup'}
        ] },
    { path: '*', redirect: '/'}
];