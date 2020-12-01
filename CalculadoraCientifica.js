"use strict";
class Calculadora {
	constructor (){
		this.calculadora=new Array();
		this.c=new Array();
	}
	digitos(valor){
		document.getElementById('resultado').value+=document.getElementById(valor).value;
		this.c.push(valor);
	}
	puntos(){
		document.getElementById('resultado').value+=".";
		this.c.push(".");
	}
	multiplicacion(){
		document.getElementById('resultado').value+="*";
		this.c.push("*");
	}
	igual(){
		var str;
		str=document.getElementById('resultado').value;
		for(var i in this.c){
			
			if(this.c[i]=='^'){
				var x=0;
				var pow="";
				str="";
				while(x!=i){
					str+=this.c[x];
					x++;
				}
				i++;
				while(this.c[i]!=null){
					pow+=this.c[i];
					i++;
				}
				document.getElementById('resultado').value=Math.pow(str,pow);
				this.vaciaPila();
				this.c.push(document.getElementById('resultado').value);
			}
			
		}
		if(str==document.getElementById('resultado').value){
			try{
				document.getElementById('resultado').value=eval(str);
				this.vaciaPila();
				this.c.push(document.getElementById('resultado').value);
			}catch(err){
				document.getElementById('resultado').value="Error = "+err; 
			}
		}
	}
	vaciaPila(){
		for(var i in this.c){
			this.c.pop();
		}
		this.c.pop();
		
	}
	suma(){
		document.getElementById('resultado').value+="+";
		this.c.push("+");
	}
	resta(){
		document.getElementById('resultado').value+="-";
		this.c.push("-");
	}
	division(){
		document.getElementById('resultado').value+="/";
		this.c.push("/");
	}
	borrar(){
		document.getElementById('resultado').value="";
		this.vaciaPila();
	}
	mMas(){
		var str;
		if(this.calculadora.length==0){
			str=document.getElementById('resultado').value;
			this.calculadora[0]=str;
		}else{
			for(var i in this.calculadora){
				if(this.calculadora[i+1]==null){
					str=document.getElementById('resultado').value;
					this.calculadora[i]+='+';
					this.calculadora[i]+=str;
				}
					
			}
		}
	}
	mMenos(){
		var str;
		str=document.getElementById('resultado').value;
		if(this.calculadora.length==0){
			this.calculadora[0]="-"+str;
		}else{
			for(var i in this.calculadora){
				if(this.calculadora[i+1]==null){
					this.calculadora[i]+='-';
					this.calculadora[i]+=str;
				}
					
			}
		}
	}
	mrc(){
		try{	
			for(var i in this.calculadora){
				if(this.calculadora[i+1]==null){
					document.getElementById('resultado').value=eval(this.calculadora[i]);
				}
					
			}
		}catch(err){
			document.getElementById('resultado').value="Error = "+err; 
		}
	}
	ms(){
		var str;
		str=document.getElementById('resultado').value;
		this.calculadora[this.calculadora.length]=str;
			
		
	}
	vaciar(){
		for(var i in this.calculadora){
			this.calculadora[i]=null;
		}
		this.borrar();
	}
}
class CalculadoraCientifica extends Calculadora{
	constructor (){
		 super();
	}
	parentesisDrch(){
		document.getElementById('resultado').value+="(";
	}
	parentesisIzq(){
		document.getElementById('resultado').value+=")";
	}
	raiz(){
		if(document.getElementById('resultado').value=="")
			document.getElementById('resultado').value="√0";
		else
			document.getElementById('resultado').value=Math.sqrt(document.getElementById('resultado').value);
	}
	pi(){
		var pi=Math.PI;
		document.getElementById('resultado').value+=pi;
	}
	exp(){
		if(document.getElementById('resultado').value=="")
			document.getElementById('resultado').value="0,e+0";
		else
			document.getElementById('resultado').value=Math.exp(document.getElementById('resultado').value);
	}
	log(){
		if(document.getElementById('resultado').value=="")
			document.getElementById('resultado').value="Entrada no valida";
		else
			document.getElementById('resultado').value=Math.log(document.getElementById('resultado').value);
	}
	pow10(){
		if(document.getElementById('resultado').value=="")
			document.getElementById('resultado').value="1";
		else
			document.getElementById('resultado').value=Math.pow(10,document.getElementById('resultado').value);
	
	}
	pow2(){
		if(document.getElementById('resultado').value=="")
			document.getElementById('resultado').value="0";
		else
			document.getElementById('resultado').value=Math.pow(document.getElementById('resultado').value,2);
	}
	sin(){
		for(var i in this.c){
			if(this.c[i]=="h"){
				document.getElementById('resultado').value=Math.sinh(document.getElementById('resultado').value);
				this.vaciaPila();
			}else if(this.c[i]=="z"){
				document.getElementById('resultado').value=Math.asen(document.getElementById('resultado').value);
				this.vaciaPila();
			}
		}
		if(this.c.length!=0){
			if(document.getElementById('resultado').value=="")
				document.getElementById('resultado').value="sin(0)";
			else{
				document.getElementById('resultado').value=Math.sin(document.getElementById('resultado').value);
				this.vaciaPila();
			}
		}
		
	}

	cos(){
		for(var i in this.c){
			if(this.c[i]=="h"){
				document.getElementById('resultado').value=Math.cosh(document.getElementById('resultado').value);
				this.vaciaPila();
			}else if(this.c[i]=="z"){
				document.getElementById('resultado').value=Math.acos(document.getElementById('resultado').value);
				this.vaciaPila();
			}
		}
		if(this.c.length!=0){
			if(document.getElementById('resultado').value=="")
				document.getElementById('resultado').value="cos(0)";
			else{
				document.getElementById('resultado').value=Math.cos(document.getElementById('resultado').value);
				this.vaciaPila();
			}
		}
		
	}
	tan(){
		for(var i in this.c){
			if(this.c[i]=="h"){
				document.getElementById('resultado').value=Math.tanh(document.getElementById('resultado').value);
				this.vaciaPila();
			}else if(this.c[i]=="z"){
				document.getElementById('resultado').value=Math.atan(document.getElementById('resultado').value);
				this.vaciaPila();
			}
		}
		if(this.c.length!=0){
			if(document.getElementById('resultado').value=="")
				document.getElementById('resultado').value="tan(0)";
			else{
				document.getElementById('resultado').value=Math.tan(document.getElementById('resultado').value);
				this.vaciaPila();
			}
		}
		
	}
	factorial(){
		var x=document.getElementById('resultado').value;
		var i=0;
		var result=1;
		while(x!=i){
			result=result*(i+1);
			i++;
		}
		document.getElementById('resultado').value=result;
	}
	pow(){
		document.getElementById('resultado').value+="^";
	}
	masYMenos(){
		var x=this.c[this.c.length-1];
		this.c.pop();
		x=-(x);
		this.c.push(x);
		document.getElementById('resultado').value="";
		for(var i in this.c){
			document.getElementById('resultado').value+=this.c[i];
		}
	}
	eliminarUltimoDigito(){
		this.c.pop();
		document.getElementById('resultado').value="";
		if(this.c.length!=0){
			for(var i in this.c){
				document.getElementById('resultado').value+=this.c[i];
			}
		}
	}
	hiperbolica(){
		this.c.push("h");
	}
	inversa(){
		this.c.push("z");
	}
	modulo(){
		document.getElementById('resultado').value+="%";
		this.c.push("%");
	}
}

var calculadora=new CalculadoraCientifica();
var c=new CalculadoraCientifica();