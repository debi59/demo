setTimeout(function() {
  var bars = document.getElementsByClassName('progress-bar');
  for (var i = 0; i < bars.length; i++) {
    bars[i].children[0].style.width = bars[i].dataset.percent;
    bars[i].children[1].innerHTML = bars[i].dataset.percent;
  };
}, 0);

function ShowDemo25M(val) {     
        var btnPrint = document.getElementById("Select1");
        if(btnPrint.value=="#Progress1")
		{
			var bars = document.getElementsByClassName('progress-bar');
			var vals=parseInt(bars[0].dataset.percent)+parseInt(val);
			if(parseInt(vals)>0)
			{
				if(parseInt(vals)<=230)
				{			
					bars[0].dataset.percent=vals;
					bars[0].children[0].style.width=vals+"%";
					bars[0].children[1].innerHTML =vals+"%";
				}			
				else{
					bars[0].dataset.percent=230;
					bars[0].children[0].style.width=100+"%";
					bars[0].children[1].innerHTML =230+"%";
				}
				if(vals>100)
				{	
					bars[0].classList.remove("progress-bar--red");
					bars[0].classList.add("progress-bar--yellow");			
				}
				else
				{
					bars[0].classList.remove("progress-bar--yellow");
					bars[0].classList.add("progress-bar--red");
				}
			}
			else
			{
				bars[0].dataset.percent=0;
				bars[0].children[0].style.width=0+"%";
				bars[0].children[1].innerHTML =0+"%";
			}
			
		 
		}
		else if(btnPrint.value=="#Progress2")
		{
				var bars = document.getElementsByClassName('progress-bar');
				var vals=parseInt(bars[1].dataset.percent)+parseInt(val);
				if(parseInt(vals)>0)
				{
			
					if(parseInt(vals)<=230)
					{					
						bars[1].dataset.percent=vals;
						bars[1].children[0].style.width=vals+"%";
						bars[1].children[1].innerHTML =vals+"%";
					}
					else{
						bars[1].dataset.percent=230;
						bars[1].children[0].style.width=100+"%";
						bars[1].children[1].innerHTML =230+"%";
					}
					if(vals>100)
					{	
						bars[1].classList.remove("progress-bar--blue");
						bars[1].classList.add("progress-bar--purple");			
					}
					else
					{
						bars[1].classList.remove("progress-bar--purple");
						bars[1].classList.add("progress-bar--blue");
					}
				}
				else
				{
					bars[1].dataset.percent=0;
					bars[1].children[0].style.width=0+"%";
					bars[1].children[1].innerHTML =0+"%";
				}
			
		}
		else if(btnPrint.value=="#Progress3")
		{
			var bars = document.getElementsByClassName('progress-bar');		
			var vals=parseInt(bars[2].dataset.percent)+parseInt(val);
			if(parseInt(vals)>0)
				{
					if(parseInt(vals)<=230)
					{					
						bars[2].dataset.percent=vals;
						bars[2].children[0].style.width=vals+"%";
						bars[2].children[1].innerHTML =vals+"%";
					}
					else{
						bars[2].dataset.percent=230;
						bars[2].children[0].style.width=100+"%";
						bars[2].children[1].innerHTML =230+"%";
					}
					if(vals>100)
					{	
						bars[2].classList.remove("progress-bar--green");
						bars[2].classList.add("progress-bar--grey");			
					}
					else
					{
						bars[2].classList.remove("progress-bar--grey");
						bars[2].classList.add("progress-bar--green");
					}
				}
				else
				{
					bars[2].dataset.percent=0;
					bars[2].children[0].style.width=0+"%";
					bars[2].children[1].innerHTML =0+"%";
				}
		}
    }
	
	