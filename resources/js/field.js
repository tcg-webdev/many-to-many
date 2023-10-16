Nova.booting((Vue, router, store) => {
  Vue.component('index-tcgwebdev-belongs-to-many', require('./components/IndexField'))
  Vue.component('detail-tcgwebdev-belongs-to-many', require('./components/DetailField'))
  Vue.component('form-tcgwebdev-belongs-to-many', require('./components/FormField'))
})
