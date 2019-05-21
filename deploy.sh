WEB_PATH='/home/network-demo'

echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R 775 $WEB_PATH
echo "Finished."
