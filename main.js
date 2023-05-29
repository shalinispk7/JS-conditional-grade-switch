let mark=parseInt(prompt("enter your mark"));
switch(true){
	case mark>=96 && mark<=100:
  document.write("S-Grade");
  break;
  case mark>=80 && mark<=95:
  document.write("A-Grade");
  break;
  case mark>=60 && mark<=79:
  document.write("B-Grade");
  break;
  case mark>=40 && mark<=59:
  document.write("C-Grade");
  break;
  case mark>=35 && mark<=39:
  document.write("D-Grade");
  break;
  case mark<35:
  document.write("Fail");
  break;
  default:
  document.write("invalid mark");
}