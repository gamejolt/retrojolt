#!/bin/bash

# get script path
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

. common.sh

emmake make -C $MAMEPATH REGENIE=1 -j5 SUBTARGET=msx SOURCES=src/mame/drivers/msx.cpp
cp -v $MAMEPATH/mamemsx.js ../drivers
