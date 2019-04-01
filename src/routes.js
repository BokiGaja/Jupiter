import Main from './components/Main.vue';

// Lazy Loading
const Dogs = resolve => {
    require.ensure(['./components/Dogs/Dogs.vue'], () => {
        resolve(require('./components/Dogs/Dogs.vue'))
    })
};
const Members = resolve => {
    require.ensure(['./components/Members/Members.vue'], () => {
        resolve(require('./components/Members/Members.vue'))
    })
};
const Contact = resolve => {
    require.ensure(['./components/Contact.vue'], () => {
        resolve(require('./components/Contact.vue'))
    })
};
const Adopt = resolve => {
    require.ensure(['./components/Dogs/Adoption/Adopt.vue'], () => {
        resolve(require('./components/Dogs/Adoption/Adopt.vue'))
    })
};
const Lost = resolve => {
    require.ensure(['./components/Dogs/Lost/Lost.vue'], () => {
        resolve(require('./components/Dogs/Lost/Lost.vue'))
    })
};
const Found = resolve => {
    require.ensure(['./components/Dogs/Found/Found.vue'], () => {
        resolve(require('./components/Dogs/Found/Found.vue'))
    })
};
const MembersList = resolve => {
    require.ensure(['./components/Members/Members/MembersList.vue'], () => {
        resolve(require('./components/Members/Members/MembersList.vue'))
    })
};
const DonorsList = resolve => {
    require.ensure(['./components/Members/Donors/DonorsList.vue'], () => {
        resolve(require('./components/Members/Donors/DonorsList.vue'))
    })
};
const JoinForm = resolve => {
    require.ensure(['./components/Members/JoinForm.vue'], () => {
        resolve(require('./components/Members/JoinForm.vue'))
    })
};


export const routes = [
    { path: '', component: Main},
    { path: '/dogs', component: Dogs, children: [
            { path: '', component: Adopt, name: 'adopt'},
            { path: 'lost', component: Lost, name: 'lost'},
            { path: 'found', component: Found, name: 'found'}
        ] },
    { path: '/members', component: Members, name: 'members', children: [
            { path: '/members/membersList', component: MembersList, name: 'membersList'},
            { path: '/members/donorsList', component: DonorsList, name: 'donorsList'},
            { path: '/members/joinForm', component: JoinForm, name: 'joinForm'}
        ] },
    { path: '/contacts', component: Contact, name: 'contacts'},
    { path: '*', redirect: '/'}
];