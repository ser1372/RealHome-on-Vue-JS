<template>
  <div class="home">
    
     <Carusel/>
<div class="container home__offering ">
  <div class="row">
     <div class="col-md-4 home_border">
      <h3 class="home__offeringTitle">We are Offering the Best Estate Deals</h3>
     </div>
     <div class="col-md-8">
      <p >
        Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
      </p>

     </div>
  </div>
    </div>
    
    <Feauters :data = "featureData"/>
    <Properties :propertiesData = "propertiesData"/>
    
    <div class="home__slider">
      <CarouselPictureContent/>
      </div>
      <div class="home__banner">
			<Banner />
		</div>
      </div>
</template>
<script>
import {featureData, propertiesData}  from '../data/data.dummy'

import Carusel from '@/components/Carusel.vue'
import Feauters from '@/components/Feauters.vue'
import Properties from '@/components/Properties.vue'
import CarouselPictureContent from '../components/CarouselPictureContent.vue'
import Banner from '@/components/Banner.vue'

export default{
  name: 'HomeView',
  components: {
    Carusel,
    Feauters,
    Properties,
    CarouselPictureContent,
    Banner,
},
data(){
  return{
    featureData: featureData,
    propertiesData: propertiesData,
    }
  },
}

</script>


