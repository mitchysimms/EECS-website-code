#ifndef TEST_H
#define TEST_H

#include "LinkedListOfInts.h"

class Test {

//constructor, destructor, and starting function
public:
     Test();
     ~Test();
     void startTests();

//all tests that need to be run
private:
     LinkedListOfInts *testerList;
     void isEmptyWorks();
     void sizeTest();
     void searchTest();
     void vectorConversionTest();
     void testAddFront();
     void testAddBack();
     void testRemoveFront();
     void testRemoveBack();


};

#endif
