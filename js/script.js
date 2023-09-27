const {createApp} = Vue;

createApp({
  data(){
    return {
      saluto: 'Hello World',
      image: 'image/fcizntw4zinyl8pzu058.webp',
      position: 'center',
      zoom: 'scale'
    }
  }
}).mount('#app')