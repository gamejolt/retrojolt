cd ../vendor/mame/
make REGENIE=1 -j5 OVERRIDE_CXX="clang++" OVERRIDE_CC="clang" SOURCES=src/mame/drivers/gba.cpp,src/mame/drivers/gb.cpp,src/mame/drivers/vboy.cpp,src/mame/drivers/nes.cpp,src/mame/drivers/megadriv.cpp,src/mame/drivers/snes.cpp,src/mame/drivers/c64.cpp,src/mame/drivers/spectrum.cpp,src/mame/drivers/a2600.cpp,src/mame/drivers/amstrad.cpp
