#!/bin/bash

# get script path
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

. common.sh

emmake make -C $MAMEPATH REGENIE=1 -j5 SUBTARGET=amstrad SOURCES=src/mame/drivers/amstrad.cpp
cp -v $MAMEPATH/mameamstrad.js ../drivers
