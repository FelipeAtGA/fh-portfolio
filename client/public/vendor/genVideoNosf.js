window.onload = () => {
  const stop = document.querySelectorAll("[id^= 'myVideo']");
  const vid = document.getElementById('myVideo');
  const vid1 = document.getElementById('myVideo1');
  const vid2 = document.getElementById('myVideo2');
  const vid3 = document.getElementById('myVideo3');
  const vid4 = document.getElementById('myVideo4');
  const vid5 = document.getElementById('myVideo5');
  const vid6 = document.getElementById('myVideo6');

  let timer;
  var tempTimeOut;
  let tempInterval;
  let count = 0;
  let playhead = 0;

  function stopVideo() {
    console.log('inside stop ');
    stop.stop();
  }

  function vidPlay(){
    vid.currentTime = 2700/100;
    vid.play();
    clearTimeout(tempTimeOut);
    tempTimeOut = setTimeout(loop1, 2000);

  }

  function vid6Play(){
    vid6.currentTime = 1828/100;
    vid6.play();
    tempTimeOut = setTimeout(vidPlay, 5000);

  }

  vid6Play();

  function loop1(){
    clearTimeout(tempTimeOut);
    vid6.currentTime = 2000/100;
    vid.currentTime = 2900/100;
    vid6.play();
    vid.play();
    if(count < 3){
      tempTimeOut = setTimeout(loop1, 5000);
      count +=1;
    }else{
      count =0;
      clearTimeout(tempTimeOut);
      cut1();
    }
  }

  function cut1(){
    vid6.currentTime = vid6.duration;
    vid.currentTime = vid.duration;
    vid3.currentTime = 3600/100;
    vid3.play();
    tempTimeOut = setTimeout(cut2, 8000);
  }

  function cut2(){
    clearTimeout(tempTimeOut);
    vid.currentTime = 4500/100;
    vid.play();
    vid1.currentTime = 4500/100;
    vid1.play();
    vid2.currentTime = 4500/100;
    vid2.play();
    vid3.currentTime = vid3.duration;
    if(count < 1){
      tempTimeOut = setTimeout(cut2, 4000);
      count += 1;
    }else{
      count = 0;
      cut3();
    }

  }

  function cut3(){
    clearTimeout(tempTimeOut);
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = 5000/100;
    vid2.play();
    cut4();
    if(count < 4){
      tempTimeOut = setTimeout(cut3, 2500);
      count += 1;
    }else{
      count = 0;
      vid2.currentTime = vid2.duration;
      cut5();
    }

  }

  function cut4(){
    vid4.currentTime = 5500/100;
    vid4.play();

  }

  function cut5(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 5500/100;
    vid4.play();
    tempTimeOut = setTimeout(cut6, 6000);
  }

  function cut6(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 6500/100;
    vid4.play();
    vid5.currentTime = 6500/100;
    vid5.play();
    vid6.currentTime = 6500/100;
    vid6.play();
    tempTimeOut = setTimeout(cut7, 8000);
  }

  function cut7(){
    clearTimeout(tempTimeOut);
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid.currentTime = 7500/100;
    vid1.currentTime = 7500/100;
    vid2.currentTime = 7500/100;
    vid.play();
    vid1.play();
    vid2.play();
    tempTimeOut = setTimeout(cut8, 7000);

  }

  function cut8(){
    clearTimeout(tempTimeOut);
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid4.currentTime = 10200/100;
    vid4.play();
    vid5.currentTime = 10200/100;
    vid5.play();
    vid6.currentTime = 10200/100;
    vid6.play();
    tempTimeOut = setTimeout(cut9, 2000);
  }

  function cut9(){
    clearTimeout(tempTimeOut);
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid.currentTime = 10600/100;
    vid1.currentTime = 10600/100;
    vid2.currentTime = 10600/100;
    vid.play();
    vid1.play();
    vid2.play();
    tempTimeOut = setTimeout(cut10, 9000);

  }

  function cut10(){
    clearTimeout(tempTimeOut);
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid4.currentTime = 11600/100;
    vid4.play();
    vid5.currentTime = 11600/100;
    vid5.play();
    vid6.currentTime = 11600/100;
    vid6.play();
    tempTimeOut = setTimeout(cut11, 2000);
  }

  function cut11(){
    clearTimeout(tempTimeOut);
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid.currentTime = 12100/100;
    vid1.currentTime = 12100/100;
    vid2.currentTime = 12100/100;
    vid.play();
    vid1.play();
    vid2.play();
    tempTimeOut = setTimeout(cut12, 2000);

  }

  function cut12(){
    clearTimeout(tempTimeOut);
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid4.currentTime = 12300/100;
    vid5.currentTime = 12300/100;
    vid6.currentTime = 12300/100;
    vid4.play();
    vid5.play();
    vid6.play();
    tempTimeOut = setTimeout(cut13, 4000);
  }

  function cut13(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = vid4.duration;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = vid2.duration;
    vid3.currentTime = 12820/100;
    vid3.play();
    tempTimeOut = setTimeout(cut14, 4000);

  }

  function cut14(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 13260/100;
    vid5.currentTime = 13260/100;
    vid6.currentTime = 13260/100;
    vid.currentTime = 13260/100;
    vid1.currentTime = 13260/100;
    vid2.currentTime = 13260/100;
    vid3.currentTime = 13500/100;
    vid.play();
    vid1.play();
    vid2.play();
    vid4.play();
    vid5.play();
    vid6.play();
    vid3.play();
    tempTimeOut = setTimeout(cut15, 2200);

  }

  function cut15(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 14000/100;
    vid5.currentTime = 14000/100;
    vid6.currentTime = 14000/100;
    vid.currentTime = 14000/100;
    vid1.currentTime = 14000/100;
    vid2.currentTime = 14000/100;
    vid3.currentTime = 14000/100;
    vid.play();
    vid1.play();
    vid2.play();
    vid4.play();
    vid5.play();
    vid6.play();
    vid3.play();
    tempTimeOut = setTimeout(cut16, 5500);

  }

  function cut16(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = vid4.duration;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = vid2.duration;
    vid3.currentTime = 14600/100;
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    vid3.play();
    tempTimeOut = setTimeout(cut17, 9300);

  }

  function cut17(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 900/100;
    vid5.currentTime = 900/100;
    vid6.currentTime = 900/100;
    vid.currentTime = 900/100;
    vid1.currentTime = 900/100;
    vid2.currentTime = 900/100;
    vid3.currentTime = 15500/100;
    vid.play();
    vid1.play();
    vid2.play();
    vid4.play();
    vid5.play();
    vid6.play();
    vid3.play();
    tempTimeOut = setTimeout(cut18, 2500);

  }

  function cut18(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 900/100;
    vid5.currentTime = 900/100;
    vid6.currentTime = 900/100;
    vid.currentTime = 900/100;
    vid1.currentTime = 900/100;
    vid2.currentTime = 900/100;
    vid3.currentTime = 15500/100;
    vid.play();
    vid1.play();
    vid2.play();
    vid4.play();
    vid5.play();
    vid6.play();
    vid3.play();
    if(count < 4){
      tempTimeOut = setTimeout(cut18, 2500);
      count += 1;
    }else{
      count = 0;
      cut19();
    }

  }

  function cut19(){
    clearTimeout(tempTimeOut);
    vid4.currentTime = 900/100;
    vid5.currentTime = 900/100;
    vid6.currentTime = 900/100;
    vid.currentTime = 900/100;
    vid1.currentTime = 900/100;
    vid2.currentTime = 900/100;
    vid3.currentTime = 900/100;
    vid.play();
    vid1.play();
    vid2.play();
    vid4.play();
    vid5.play();
    vid6.play();
    vid3.play();
    if(count < 1){
      tempTimeOut = setTimeout(cut19, 9200);
      count += 1;
    }else{
      count = 0;
      cut20();
    }

  }

  function cut20(){
    clearTimeout(tempTimeOut);
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = 17700/100;
    vid3.currentTime = vid3.duration;
    vid4.currentTime = vid4.duration;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.play();
    vid1.play();
    vid2.play();
    vid3.play();
    vid4.play();
    vid5.play();
    vid6.play();
    if(count < 3){
      tempTimeOut = setTimeout(cut20, 2000);
      count += 1;
    }else{
      count = 0;
      cut21();
    }

  }

  function cut21(){
    clearTimeout(tempTimeOut);
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = vid2.duration;
    vid3.currentTime = vid3.duration;
    vid4.currentTime = 18000/100;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid3.pause();
    vid4.play();
    vid5.pause();
    vid6.pause();
    tempTimeOut = setTimeout(cut22, 12000);

  }

  function cut22(){
    clearTimeout(tempTimeOut);
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = vid2.duration;
    vid3.currentTime = 20000/100;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid3.play();
    vid5.pause();
    vid6.pause();
    tempTimeOut = setTimeout(cut23, 2700);

  }

  function cut23(){
    clearTimeout(tempTimeOut);
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = vid2.duration;
    vid3.currentTime = 20300/100;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid3.play();
    vid4.pause();
    vid5.pause();
    vid6.pause();
    tempTimeOut = setTimeout(cut24, 3500);

  }

  function cut24(){
    clearTimeout(tempTimeOut);
    vid.currentTime = vid.duration;
    vid1.currentTime = vid1.duration;
    vid2.currentTime = vid2.duration;
    vid3.currentTime = 20600/100;
    vid4.currentTime = vid4.duration;
    vid5.currentTime = vid5.duration;
    vid6.currentTime = vid6.duration;
    vid.pause();
    vid1.pause();
    vid2.pause();
    vid3.play();
    vid4.pause();
    vid5.pause();
    vid6.pause();

  }
}
