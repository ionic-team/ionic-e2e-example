if [[ $OSTYPE == 'darwin'* ]]; then
  bash "`dirname $0`"/build-ios.sh
fi

bash "`dirname $0`"/build-android.sh