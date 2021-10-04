<template>
  <div class="cover-slider">

    <div class="cover-slide__slide"
      v-for="slide in slides" :key="slide.id"
      v-show="slide.id == currentImg"
      :style="'background-image: url(\'' + slide.img + '\')'">{{ currentImg }}</div>

    <span class="prev" @click="prev" href="">&#10094; Previous</span>
    <span class="next" @click="next" href="">Next &#10095; </span>
  </div>
</template>

<style scoped>
.cover-slider {
  height: 100vh;
}
.cover-slide__slide {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

/* img {
  height: 600px;
  width: 100%;
} */

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slides: [
        {
          id: 0,
          img: "https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1497515098781-e965764ab601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1421&q=80"
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1503669678209-c68d00b3765d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg() {
      return Math.abs(this.currentIndex) % this.slides.length;
    },
  },
};
</script>
