set arg1=%1

if not "%arg1%"=="-npm" (
    call npm i
)

call node KCode\EntryFile.js

call node KCode\ForDatabase\ForSample\CreateData.js
