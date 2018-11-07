#include "Test.h"
#include <iostream>

Test::Test() {
     testerList = new LinkedListOfInts();
     std::cout << "A list has been created." << std::endl << std::endl;

     //make sure list isnt created with nodes ---> testerList = <>
     std::cout << "TEST 1: New list is initialized empty: ";
     if(testerList->isEmpty()){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }

     //make sure this lines up with size=0  ---> testerList = <>
     std::cout << "TEST 2: New list has size zero: ";
     if(testerList->size() == 0){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }

}

Test::~Test() {
     delete testerList;
     testerList = nullptr;
}

void Test::startTests() {
     isEmptyWorks();
     testAddFront();
     testAddBack();

     sizeTest();
     searchTest();
     vectorConversionTest();

     testRemoveFront();
     testRemoveBack();
}

void Test::isEmptyWorks() {

     //test to make sure true condition is true ---> testerList = <>
      std::cout << "TEST 3: List is Empty before adding anything to it: ";
      if(testerList->isEmpty()){
           std::cout << "PASSED" << std::endl;
      } else {
           std::cout << "FAILED" << std::endl;
      }

      //test to make sure false condition is false
      testerList->addFront(1);
      //  ---> testerList = <1>

      std::cout << "TEST 4: List is not empty when a node is added to the front: ";
      if(testerList->isEmpty()){
           std::cout << "FAILED" << std::endl;
      } else {
           std::cout << "PASSED" << std::endl;
      }
}

void Test::testAddFront() {

     //test to make sure size is correct for add fronts
     testerList->addFront(0); //size should be 2;
     //  ---> testerList = <0,1>

     std::cout << "TEST 5: List returns correct size after adding to the front: ";
     if(testerList->size()==2){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }
}

void Test::testAddBack() {

     //test to make sure size is correct for add backs
     testerList->addBack(2); //size should be 3;
     //  ---> testerList = <0,1,2>

     std::cout << "TEST 6: List returns correct size after adding to the back: ";
     if(testerList->size()==3){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }
}

void Test::sizeTest() {
     bool pass = true;

     //test to make sure size returns correct for a few adds
     std::cout << "TEST 7: Size returns correct after multiple adds: ";
     for(int i=3; i < 8; i++){
          testerList->addBack(i);
          if(testerList->size() != i+1){
               pass = false;
          }
     }

     //  ---> testerList = <0,1,2,3,4,5,6,7>

     if(pass){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }
}

void Test::searchTest() {

     //list should be filled with values 0-7 (size 8)
     //test to ensure that all of those values can be returned and other values will return false
     bool pass = true;

     //test for values that should be in it (search returns true)
     for(int i=0; i < 8; i++){
          if(!testerList->search(i)){
               pass = false;
          }
     }

     //test for values that are not in it (search returns false)
     if(testerList->search(20)){
          pass = false;
     }

     std::cout << "TEST 8: Search function only returns true for nested values: ";
     if(pass){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }
}

void Test::vectorConversionTest() {
     std::vector<int> testerVector;
     testerVector = testerList->toVector(); // ---> testerList = <0,1,2,3,4,5,6,7>
     bool pass = true;

     for(int i=0; (unsigned)i<testerVector.size(); i++) {
          std::cout << "i: " << i << std::endl;
          std::cout << "vector(" << i << ")" << testerVector.at(i) << std::endl;
          if(testerVector.at(i) != i){
               pass = false;
          }
     }

     std::cout << "TEST 9: Vector conversion works: ";
     if(pass){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }
}

void Test::testRemoveFront() {

     //test to make sure size is correct for add fronts
     testerList->removeFront(); //size should be 7;
     //  ---> testerList = <1,2,3,4,5,6,7>

     std::cout << "TEST 10: List returns correct size after removing from the front: ";
     if(testerList->size()==7){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl;
     }
}

void Test::testRemoveBack() {

     //test to make sure size is correct for add backs
     testerList->removeBack(); //size should be 6;
     //  ---> testerList = <1,2,3,4,5,6>

     std::cout << "TEST 11: List returns correct size after removing from the back: ";
     if(testerList->size()==6){
          std::cout << "PASSED" << std::endl;
     } else {
          std::cout << "FAILED" << std::endl << std::endl;
     }
}
