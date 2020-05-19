<<<<<<< HEAD
1. Introduction of JavaScript Data Structure

  1) Stack - call stack is the most imporatant stack in JavaScript. it is an array with two built-in methods which are .push() and .pop(). stacks follow the "Last In, First Out" protocol (LIFO). in addition, we can reverse the order of the stack: the bottom becomes the top and the top becomes the bottom. and we can change in place of .push() and .pop() to .unshift() and .shift() respectively. however, push and pop methods are more useful than unshift and shift method. 
    
    start stack.push() pseudocode

      if stack is full
        return error and exit
      else stack is not full 
        push value on the top of the array which is empty space
        return success

    start stack.pop() pseudocode

      if stack is empty
        return error and exit
      else stack is not empty
        access the data element at which top is pointing
        decrese the value of top by 1
        return success
    
  2) Queue - JS is an event-driven programming language. the browser controls only one thread to execute the entire code, using the event queue to enquui listeners and the event loop to listen for the registered events. listener functions dequeue and execute only when the stack is empty. Programmatically, .unshift and .pop play their roles enqueueing items to the end of the array and dequeueing them from the beginning of the array repectively. In other others, Queues follow the "fist in first out" protocol. 

   start enqueue pseudocode
     
     if queue is full
      return overflow
    else queue is not full 
      increment rear pointer to point the next empty space
      add data element where the rear is pointing
      return success
    
     end if

    start dequeue psedocode
     
      if queue is empty
        return underflow
      else queue is not empty
        access the data where front is pointing
        increment front pointer to point to the next available data element
        return success
      end if
     
  3) Linked List - linked lists store data elements in sequential order and they indicate other elements using Pointers. the first node is called 'Head' and the last one is called 'Tail'. in slingly-linked list, each nodes have own pointer which indicates the next node from them. in a doubly-linked list, we can start from the tail to head and a pointer to the previous node is also kept as well. 

  4) Tree - a tree is similar with linked list, except it adopts a hierarchical structure keeping  references to many child nodes. each node can have only one or two parents. 

  start tree pseudocode

    if root is NULL 
      create root node 
    else if root exists 
      compare the data with node.data

      while until insertion position is located
        
        if data > node.data
          goto right subtree
        else 
          goto left subtree
        
      end while 

      insert data 
    end if

  5) Graph - graph is free to have more than one parent. this is the difference with a tree. edges that have both direction and weight are near to vector. 

  6) Hash table - a hash table pairs keys and values. data is stored in an array format which has get each unique index value. a hash function connects both keys and indexes if you know the index of the desired data. 

  start hash table pseudocode

  insert(key, value)
    index = hashfunction(key)
    array[index] = (keym value)

  find(key):
    index = hashFunction(key)
    return array[index]

  remove(key):
     index = hashFunction(key)
      array[index] = null


2. Explain in details Linked list

 a) What is a linked list -
   a linked list is a sequence data structure, which connects elements. unlike an array, a node in a linked list is not necessarily positioned close to the previous element or the next element. nodes are connected by pointers. 

 b) Advantages - 
   can be increse/decrease the number of nodes(dynamic allocation)
   can use muptiple data types as elements
   basically its advanced than arrays
 
    Disadvantages - 
   consumes more memory than arrays
   need ro clear memory once we done with it
   handling pointers is a bit tricky compared to arrays

 c) Real world exmaple -
   web-browsers, where it creates a linked list of web-pages visited, so that when you check history or press back button, the previous node's data is fetched. 

 d) Pseudocode and diagram - 
   constructor(data){
       this.data = data
       this.next = null
   }

  diagram
   ![alt text](https://www.pythoncentral.io/wp-content/uploads/2017/08/wordpress-hints-linked-list-google.png"linked list diagram")
3. Explain in details JavaScript Recursion

 a) What is a Recursion - 
   recursion is when a function calls itself. if no one stops it, then it will recurse forever. recursive function can make iteration without loop or for/while. 

 b) Advantages -
   recursion can reduce time complexity. 
   it adds clarity and reduces the time needed to write and debug code

    Disadvantages -
    recursion uses more memory
    it can be slower than other iteration syntaxes

 c) Which data structure stores you can use recursion to access data -
    stack can use recursino to access data properly because of it LIFO protocol it remembers its 'caller' so knows whom to return when the function has to return. recursion makes use of system stack for storing the return addresses of the function calls.

 d) Real world example -
   fibonacci-recursive function
   
   (if (n < 2)
      n
     (+ (fibonacci-recursive (- n 2)) (fibonacci-recursive (- n 1)))))

 e) Pseudocode and diagram -
   
   Pseudocode

   function find_max(list){
       possible_max_1 = first value in list
       possible_max_2 = find_max(rest of the list)

       if (possible_max_1 < possible_max_2)
         answer is possible_max_1
       else 
         answer is possivle_max_2
       end

    end
   }

   Diagram

   ![alt text](https://javascript.info/article/recursion/recursion-pow.svg"recursion diagram")
=======
# classActivity190520
>>>>>>> 9c07796ebc5cdb73729a00e536c1618ebb918ca3
