cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=gbc SOURCES=src/mame/drivers/gb.cpp 
cp mamegbc.js ../../drivers

