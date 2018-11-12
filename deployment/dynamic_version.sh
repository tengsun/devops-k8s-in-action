export GIT_TAG_NAME=v2
export NAMESPACE=isg-poc
cat ./node-deploy-dv.yaml | sed 's/{VERSION}/'${GIT_TAG_NAME}'/g' | kubectl apply -n=${NAMESPACE} -f -