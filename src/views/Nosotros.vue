<template>
  <web-layout>
   <main class="page-nosotros"> 
       <div class="page-nosotros__container">
            <h1 class="nosotros__title">Nosotros</h1>
                <div class="nosotros__grid">
                     <px-team-card v-for="member in members" :key="member.id" :member="member">

                    </px-team-card>
                </div>
        </div>
    </main>
  </web-layout>
</template>

<script>
import WebLayout from '@/layouts/WebLayout.vue';
import PxTeamCard from '../components/PxTeamCard.vue';

export default {
  name: "Nosotros",
  components: {
    WebLayout,
    PxTeamCard,
  },
  data(){
      return {
        members:[
            {
                id:1,
                name:"Nhora García",
                image:"",
                description:"Ingeniera Industrial",
                mail:"nhoragarciab@yahoo.com",
            },
            {
                id:2,
                name:"Fernando Torres",
                image:"",
                description:"Digital Marketer",
                mail:"tp.fernando@gmail.com",
            },
            {
                id:3,
                name:"Geiner Lara",
                image:"",
                description:"Desarrollador web y estudiante de ingeniería industrial",
                mail:"davidlararada567@gmail.com",
            }
        ] 
      }
  }
}
</script>

<style scoped>
.page-nosotros{
padding: 0 30px;
box-sizing: border-box;

}

.page-nosotros__container{
margin: 0 auto;
max-width: 768px;
padding: 130px 0 50px;

     }
.nosotros__title{
    font-size: 20px;
    text-align: center;
    }

.nosotros__grid{
    display: grid;
    gap: 50px;
    margin-top: 50px;

}
</style>