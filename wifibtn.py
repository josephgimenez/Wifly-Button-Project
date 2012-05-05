#!/usr/bin/python

from socket import *
import commands
import re

HOST = ''
PORT = 1980
ADDR = (HOST, PORT)
BUFSIZE = 4096

serv = socket(AF_INET, SOCK_STREAM);
serv.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)

serv.bind(ADDR)
serv.listen(5)

print "Listening for connection on port " + str(PORT)
conn, addr = serv.accept();
print '...connected.'

conn.send('!');

while True:
	data = conn.recv(BUFSIZE)
	print data

	if (data != ""):	
		buttonPressed = re.search(".*button pressed.*", data)
		if buttonPressed is not None:
			commands.getoutput("open file:///Users/codebx/Desktop/WiflySite/cowbell.html")

