cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=snes SOURCES=src/mame/drivers/snes.cpp 
cp mamesnes.js ../../drivers
