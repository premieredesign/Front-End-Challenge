FROM hayd/alpine-deno:1.4.0

# The port that your application listens to.
EXPOSE 8080

WORKDIR /app/server

# Prefer not to run as root.
USER deno

COPY . /app/server/

CMD ["run", "--allow-net", "server.ts"]
