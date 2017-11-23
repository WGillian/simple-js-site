1)

[1, 2, 3, 4 + 5].length


1
// => 1
2
// => 2
3
// => 3
4
// => 4
5
// => 5
4 + 5
// => 9
[1,2,3,9]
// => [1,2,3,9]
[1,2,3,9].length
// => 4


2)

"hello".subString(0, 3).length

"hello"
// => "hello"
subString
// => 2
0
// => 0
3
// => 3
.subString(0, 3)
// => .subString(0, 3)
"hello".subString(0, 3)
// => "hel"
"hel".length
// => 3



3)

"hello".subString(0, 3 - 1).length + "world"

"hello"
// => "hello"
.subString
// => .subString
0
// => 0
3
// => 3
1
// => 1
3 - 1
// => 2
"hello".subString(0, 2)
// => "he"
"he".length
// => 2
2 + "world"
// => 2+"world"


4)

{ hello: "wor" + "ld" }

hello:
// => hello:
"wor"
// => "wor"
"ld"
// => "ld"
"wor"+"ld"
// => "world"
{ hello: "world" }
// => { hello: "world" }

