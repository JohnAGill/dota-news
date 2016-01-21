if [ "$CIRCLECI" == "true" ] && [ "$CIRCLE_BRANCH" == "master" ] ; then
    npm run deployDev --token=$FIREBASE_TOKEN --non-interactive
fi
