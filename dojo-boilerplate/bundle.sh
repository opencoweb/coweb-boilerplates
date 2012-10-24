#!/bin/bash
OPWD=$PWD
read -s -p "GPG password: " KEYPASS
echo
mvn -DperformRelease=true -Dgpg.passphrase=$KEYPASS -Dmaven.artifact.gpg.keyname=9B71B7C5 clean source:jar javadoc:jar verify
if [[ $? != 0 ]]; then
    exit $?
fi
rm -f bundles/*
mkdir -p bundles
MODULES="
.
"
for MODULE in $MODULES; do
    echo $MODULE
    TARGET="$OPWD/$MODULE/target"
    NAME=`basename $MODULE`
    if [[ $NAME == '.' ]]; then
        NAME='dojo-boilerplate'
    fi
    JAR="$OPWD/bundles/$NAME.bundle.jar"
    cd $TARGET
    jar cvf "$JAR" *.pom *.asc *.war *.jar
done
