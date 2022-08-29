function compute(){
    var  ta= document.getElementById('tainput').value;
    var  others= document.getElementById('othersinput').value;
    var salary= document.getElementById('salary').value-ta-others;
    var  lwf= document.getElementById('lwfinput').value;
var  adv= document.getElementById('advinput').value;

var  tds= document.getElementById('tdsinput').value;
 
;
salary=parseInt(salary);
document.getElementById('bs').innerText= "Basic salary is "+sal.basicsalary(salary);
document.getElementById('da').innerText="DA is " + sal.da(salary);
document.getElementById('hra').innerText="HRA is "+sal.hra(salary);

document.getElementById('pf').innerText= "PF is " + sal.pf(salary);
document.getElementById('esi').innerText="ESI is "+sal.esi(salary);
document.getElementById('t1').innerText= "TOTAL(A) :"+sal.t1(salary, ta, others);
document.getElementById('t2').innerText= "TOTAL(B) :" +sal.t2(salary, tds, lwf, adv);
document.getElementById('np').innerText="NET PAYABLE: "+sal.netpay(salary, ta, others, tds, lwf, adv);
if (!(lwf==0 || lwf<0)) {
    document.getElementById('lwf').innerText= "LWF is "+ lwf;
}
if (!(adv==0 || adv<0)) {
    document.getElementById('adv').innerText= "Advance is "+ adv;
}
if (!(others==0 || others<0)) {
    document.getElementById('others').innerText= "Others is "+ others;
}
if (!(tds==0 || tds<0)) {
    document.getElementById('tds').innerText= "TDS is "+ tds;
}
if (!(ta==0 || ta<0)) {
    document.getElementById('ta').innerText="TA is " + ta;
}
document.getElementById('allow').innerText="ALLOWANCE";
document.getElementById('deduc').innerText="DEDUCTIONS";
// document.getElementById('gs').innerText=salary.gs(basicsalary);
// document.getElementById('ns').innerText=salary.ns(basicsalary);
}