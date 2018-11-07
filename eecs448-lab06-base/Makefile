#	Author: John Gibbons
#	Date: 2016.10.26


#Add needed Test.o
prog: main.o Test.o
	g++ -g -Wall -std=c++11 main.o Test.o LinkedListOfInts.o -o prog

main.o: main.cpp Test.h
	g++ -g -Wall -std=c++11 -c main.cpp

Test.o: Test.h Test.cpp
	g++ -std=c++11 -g -Wall -c Test.cpp

#DON'T delete LinkedList.o!
clean:
	rm main.o *.*~ prog
