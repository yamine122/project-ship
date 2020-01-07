<template>
<div id="wrapper">
     <header id="header">
   <slot name="header" :title="header"></slot>
   </header>
   <aside id="sidebar">
   <slot name="sidebar"></slot>
   </aside>
   <section id="content">
   <slot name="content" :content="content"></slot>
   </section>
   <footer id="footer">
   <div class="container">
        <p class="text-muted">footer page</p>
      </div>
   </footer>
</div>
</template>
<script>
export default{
}
</script>
<style scoped>
#wrapper {
     padding: 5px;
     width: 1400px;
     margin: 20px auto;
}
header {
     width: 1400px;
     height: 60px;
     /* padding: 0 15px; */
}
#content {
     /* margin: 0 auto; */
     /* width: 1400px; */
     /* float: left; */
     /* padding: 5px 15px; */
     /* min-height: 600px; */
}
/* #sidebar {
     margin: 50px 0px 0px 0px;
     width: 350px;
     padding: 5px 15px;
     float: left; 
} */
footer {
     /* clear: both; */
     /* height: 60px;
     padding: 0 15px; */
     height: 60px;
     padding: 0 0 0 15px;
}
/* 가로폭 980보다 작을 때 사용할 @media query */
@media screen and (max-width: 1200px) {     
     #pagewrap {
           width: 94%;
     }
     #content {
           clear: both;
           padding: 1% 4%;
           width: auto;
           float: none;
     }
     #sidebar {
           clear: both;
           padding: 1% 4%;
           width: 300px;
           float: none;
     }
     header, footer {
           padding: 1% 4%;
     }
}
/* 공통 */
#content {
}
#sidebar {
}

header, #content, #middle, #sidebar{
     /* margin-bottom: 5px; */
}
#pagewrap, #content, #middle, #sidebar {
     /* border: solid 1px #ccc; */
}

</style>