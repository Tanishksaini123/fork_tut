<DOCTYPE html>
<html>
<head><title> Program to solve a quadratic equation</title></head>
<body>
<script>
let root1,root2;
let a=prompt("Enter the 1st coefficient:");
let b=prompt("Enter the 2nd coefficient:");
let c=prompt("Enter the 3rd coefficient:");
let D=(b*b)- (4*a*c);
if (D>0) {
root1 = (-b+ Math.sqrt(D)) / (2*a);
root2 = (-b- Math.sqrt(D)) / (02*a);
document.write('The roots of the quadratic equation are :'+root1+' and '+root2+'.');
}
else if (D==0) {
root1 = root2 = -b / (2*a);
document.write('The roots of the quadratic equation are :'+root1+' and '+root1+'.');
}
else {
let realpart = (-b/(2*a)).toFixed(2) ;
let imagpart = (Math.sqrt(-D) /(2*a)).toFixed(2) ;

document.write("The roots of the quadratic equation are :"+realpart +"i"*imagpart+","+realpart-"i"imagpart);
}
</script>
</body>
</html>