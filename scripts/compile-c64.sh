cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=c64 SOURCES=src/mame/drivers/c64.cpp 
cp mamec64.js ../../drivers
