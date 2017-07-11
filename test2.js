#$language = "JScript"
#$interface = "1.0"


for (i=1;i<=254;i++)
{
	crt.screen.send("slb virtual-server test"+i+" type http\n");
	for(j=1;j<256;j++){
		crt.screen.send("ip "+i+".1.1."+j+" port "+j+"\n");
	}
	crt.screen.send("exit\n");
    crt.sleep(30);
}