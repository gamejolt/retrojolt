cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=a2600 SOURCES=./src/mame/drivers/a2600.cpp 
cp mamea2600.js ../../drivers
