cd ../vendor/mame/
emmake make REGENIE=1 -j5 SUBTARGET=spectrum SOURCES=src/mame/drivers/spectrum.cpp 
cp mamespectrum.js ../../drivers
