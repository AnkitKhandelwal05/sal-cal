var  ta= document.getElementById('tainput');
var salary= document.getElementById('salary')-ta;
var  lwf= document.getElementById('lwfinput');
var  adv= document.getElementById('advinput');
var  others= document.getElementById('othersinput');
var  tds= document.getElementById('tdsinput');
salary=parseInt(salary);
var sal={
basicsalary(salary){
return Math.round(salary/1.6);

},
hra(salary)
{
    return Math.round(sal.basicsalary(salary)*0.35);
},
da(salary)
    {   
        return Math.round(sal.basicsalary(salary)*0.25);
    },
esi(salary)
     {
        return Math.round(sal.basicsalary(salary)*0.0125);
     },
  
//  ta(salary)
//     {
//         return basicsalary*0.1;
//     },
 
   pf(salary)
     {
         return Math.round(sal.basicsalary(salary)*0.12);
   },
   t1(salary, ta, others){return sal.basicsalary(salary)+sal.hra(salary)+sal.da(salary)+ parseInt(ta)+parseInt(others);

   },
   t2(salary, tds, lwf, adv){return sal.pf(salary)+sal.esi(salary)+parseInt(tds)+parseInt(lwf)+parseInt(adv)},
   netpay(salary, ta, others, tds, lwf, adv){return this.t1(salary, ta, others)-this.t2(salary, tds, lwf, adv)}

 
// gs(salary)
//     {
//         return basicsalary + salary.hra(basicsalary)+ salary.da(basicsalary)+ salary.ma(basicsalary)+ salary.ta(basicsalary);
//     }, 
  
// ns(basicsalary)
// { 
//     return basicsalary+ salary.hra(basicsalary)+ salary.da(basicsalary)+ salary.ma(basicsalary)+ salary.ta(basicsalary)- salary.pf(basicsalary);

// }

}