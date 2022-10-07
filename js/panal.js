function b1(x){
	 document.getElementById('f_'+1).style.display='none';
	  document.getElementById('f_'+2).style.display='none';
	 document.getElementById('m_'+1).style.color='#000000';
	 document.getElementById('m_'+2).style.color='#000000';
	 if(x==1){
		  document.getElementById('f_'+1).style.display='block';
	 document.getElementById('m_'+1).style.color='#eb6100';
	 }else{
		  document.getElementById('f_'+2).style.display='block';
		 document.getElementById('m_'+2).style.color='#eb6100';
	 }
}