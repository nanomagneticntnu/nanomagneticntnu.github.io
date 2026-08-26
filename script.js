const btn=document.getElementById('langBtn'); let en=false;
btn.addEventListener('click',()=>{en=!en;btn.textContent=en?'中':'EN';document.documentElement.lang=en?'en':'zh-Hant';
document.querySelector('.lead').textContent=en?'Exploring nanoscale magnetism, magnetic thin films, and electrochemical control of magnetic properties.':'探索奈米尺度磁性、磁性薄膜，以及以電化學方式控制磁特性的物理機制。';
document.querySelector('#about .large').textContent=en?'We are based in the Department of Physics at National Taiwan Normal University, focusing on nanomagnetism and magnetic materials.':'我們位於國立臺灣師範大學物理學系，致力於奈米磁學與磁性材料相關研究。';});